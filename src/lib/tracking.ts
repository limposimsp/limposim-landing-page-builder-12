const STORAGE_KEY = "lp_tracking_params_v1";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
] as const;

type TrackedParam = (typeof TRACKED_PARAMS)[number];
type TrackingData = Partial<Record<TrackedParam, string>>;

const N8N_WEBHOOK_URL =
  "https://n8n.srv1401224.hstgr.cloud/webhook/lp-ads-clean-v1";

function getStoredTracking(): TrackingData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as TrackingData;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function setStoredTracking(data: TrackingData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

export function captureTrackingParamsFromUrl() {
  const url = new URL(window.location.href);
  const next: TrackingData = { ...getStoredTracking() };

  TRACKED_PARAMS.forEach((key) => {
    const value = url.searchParams.get(key);
    if (value) next[key] = value;
  });

  setStoredTracking(next);
  return next;
}

export function getTrackingData(): TrackingData {
  return { ...getStoredTracking(), ...captureTrackingParamsFromUrl() };
}

export function pushDataLayerEvent(event: string, payload: Record<string, unknown> = {}) {
  const w = window as typeof window & { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}

export function fireGoogleAdsConversion() {
  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", {
      send_to: "AW-17630599499/xjRwCO6om7YbEMuy9tZB",
    });
  }
}

export async function sendLeadToWebhook(lead: {
  name: string;
  phone: string;
  email?: string;
  source: "form_submit" | "whatsapp_click";
}) {
  const tracking = getTrackingData();

  const body = {
    event: lead.source,
    source: lead.source,
    page_url: window.location.href,
    page_path: window.location.pathname,
    ts: new Date().toISOString(),
    lead: {
      name: lead.name,
      phone: lead.phone,
      email: lead.email || "",
    },
    ...tracking,
  };

  try {
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
      mode: "cors",
    });
  } catch {
    // no-op
  }
}
