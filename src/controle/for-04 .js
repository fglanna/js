const pedidos = [
    {id: 1, status: 'pendente'},
    {id: 2, status: 'enviado'},
    {id: 3, status: 'entregue'},
    {id: 4, status: 'cancelado'},
    {id: 5, status: 'atrasado'}
];

for (const pedido of pedidos) {   
    
    if (pedido.status === 'pendente') {
        console.log(`Pedido ${pedido.id}: Aguardando pagamento ou confirmação.`)
    } else if (pedido.status === 'enviado') {
        console.log(`Pedido ${pedido.id}: Pedido foi enviado, acompanhe o rastreamento.`)
    } else if (pedido.status === 'entregue') {
        console.log(`Pedido ${pedido.id}: Pedido entregue com sucesso!`)
    } else if (pedido.status === 'cancelado') {
        console.log(`Pedido ${pedido.id}: O Pedido foi cancelado.`)
    } else if (pedido.status === 'atrasado') {
        console.log(`Pedido ${pedido.id}: Pedido esta atrasado.`)
    }
}