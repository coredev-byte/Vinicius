// Dados de contato centralizados — altere aqui e o site inteiro atualiza.
export const PHONE = '5511933086520'
export const PHONE_DISPLAY = '(11) 93308-6520'
export const INSTAGRAM = 'https://www.instagram.com/eng.vinicius_rael/'
export const INSTAGRAM_HANDLE = '@eng.vinicius_rael'

export const DEFAULT_MESSAGE =
  'Olá, Vinícius! Vim pelo seu site e gostaria de solicitar um orçamento para minha obra.'

export const whatsappLink = (message: string = DEFAULT_MESSAGE) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
