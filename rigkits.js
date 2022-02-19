const json_url = 'https://gemlux.com/collections/rigging-kits/products.json';
		
	async function getKits() {
		const response = await fetch( json_url );
		const data = await response.json();

		const products = data.products[0].title;
		const imageDiv = document.getElementById( 'imageDiv' );
	
		let str = ''
		for ( let i = 0; i < data.products.length; i++ ) {
			const product = data.products[i];
			const src  = product.images[0].src
	
			str += 
			`<div> 
				<img src=${src} /> 
				<div>${products}</div> 
				<button onclick=" window.open('http://www.google.com', '_blank'); return false;">Buy Now</button> 
			</div>`

			if ( i === 2 ) break;
		}
		imageDiv.innerHTML = str

	}
	
	getKits();