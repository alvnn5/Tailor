function beli(produk, harga) {
    localStorage.removeItem('selectedProduk');
    localStorage.setItem('selectedProduk', JSON.stringify({ produk}));
    window.location.href = 'transaksi.html';
}

function buatPesanan() {
    const nama = document.getElementById('nama').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const date = document.getElementById('date').value;

    if (!nama || !alamat || !date ) {
        alert('oops...! ada yang belum diisi!');
        return;
    }
    
    let JasType = '';
    let price = 0;
    
    if (document.getElementById('hightend').checked) {
        JasType = 'hightend';
        price = document.getElementById('hightend').getAttribute('data-price');
    } else if (document.getElementById('insider').checked) {
        JasType = 'insider';
        price = document.getElementById('insider').getAttribute('data-price');
    }  else if (document.getElementById('blazzer').checked) {
        JasType = 'Sblazzer';
        price = document.getElementById('blazzer').getAttribute('data-price');
    } else {
        alert('Silakan pilih Pesanan Anda.');
        return;
    }
    

    const orderDate = new Date(date);
    const pickupDate = new Date(orderDate);
    pickupDate.setMonth(orderDate.getMonth() + 7);

    const formattedPickupDate = pickupDate.toISOString().split('T')[0]; 

    const params = new URLSearchParams({
        nama,
        alamat,
        JasType,
        price,
        date,
        pickupDate: formattedPickupDate
    });

    window.location.href = `invoice.html?${params.toString()}`;
}
