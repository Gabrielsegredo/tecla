function showDetails(carType) {
    const details = document.getElementById('details');
    switch (carType) {
        case 'car1':
            details.innerHTML = '<h2>Carro Clássico</h2><p>Detalhes sobre carros clássicos.</p>';
            break;
        case 'car2':
            details.innerHTML = '<h2>Carro Moderno</h2><p>Detalhes sobre carros modernos, incluindo tecnologias e designs inovadores.</p>';
            break;
        case 'car3':
            details.innerHTML = '<h2>Carro Elétrico</h2><p>Explore os últimos desenvolvimentos em carros elétricos, sua eficiência e benefícios ambientais.</p>';
            break;
        default:
            details.innerHTML = '<p>Selecione uma categoria de carro para ver mais detalhes.</p>';
    }
}
