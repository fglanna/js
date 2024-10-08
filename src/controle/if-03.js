let statusUsuário = 'banido' // Poder ser: 'Ativo', "Inativo", 'banido', 'pemdente'

if (statusUsuário === 'Ativo') {
    console.log('Bem-vindo de volta! Acesso permitido.')

} else if (statusUsuário === 'inativo') {
    console.log('Sua conta está inativq. Por favor, entre em contato com sua agencia.')
} else if (statusUsuário === 'banido') {
    console.log('Acesso negado! Sua conta foi banida por violação do código de conduta.')
} else if (statusUsuário === 'pendente') {
    console.log('Sua conta ainda não foi verificada. Por favor aguarde um momento.')
} else {
    console.log('Status inválido ou usuário desconhecido. Por favor, entre em contato com o administrador.')
}
console.log( ' *** F I M  *** ')