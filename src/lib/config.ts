export const LOCATION = {
  name: "Itaquera",
  city: "São Paulo",
  state: "SP",
  address: "Rua Brook Taylor, 814 - Jd Nordeste",
  fullAddress: "Rua Brook Taylor, 814 - Jd Nordeste - São Paulo - SP",
  phone: "(11) 94050-2665",
  phoneLink: "tel:+5511940502665",
  whatsappNumber: "5511940502665",
  whatsappLink: (name: string, phone: string) =>
    `https://wa.me/5511940502665?text=${encodeURIComponent(
      `Olá! Meu nome é ${name}, meu celular é ${phone}. Gostaria de solicitar um orçamento para higienização de sofá em ${LOCATION.name}.`
    )}`,
  instagram: "https://www.instagram.com/limposim_sp",
  facebook: "https://www.facebook.com/limposimhigienizacao",
  gmb: "https://g.page/limposim",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d-46.45!3d-23.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua+Brook+Taylor%2C+814+-+Jardim+Nordeste%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1",
};
