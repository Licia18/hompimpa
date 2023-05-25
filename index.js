function fungkom ()
{
	const fungsi = Math.random();
if (fungsi <= 0.333) return "gunting";
if (fungsi >= 0.333 && fungsi < 0.666) return "kertas";
return "batu";
}

function Hasil(fungsi , fungpla)
{
	if( fungpla == fungsi) return 'Seri';
	if( fungpla == 'gunting')return (fungsi == 'kertas') ? 'Menang' :'Kalah';
 	if( fungpla == 'kertas') return (fungsi == 'batu') ? 'Menang' : 'Kalah';
	if( fungpla == 'batu') return (fungsi == 'gunting') ? 'Menang' : 'kalah';
}


const plagun = document.querySelector(".gunting")
{
	plagun.addEventListener('click',function(){
		const pilkom = fungkom();
		const pilihanPlayer = plagun.className;
		const Hasilnya = Hasil(pilkom , pilihanPlayer);
		const imageKomputer = document.querySelector('.komputer');
		imageKomputer.setAttribute('src', pilkom + '.png')
		const info = document.querySelector('.info')
		info.innerHTML = Hasilnya;
	})
}

const plaBat = document.querySelector('.batu')
{
	plaBat.addEventListener('click', function(){
		const pilkom = fungkom();
		const pilihanPlayer = plaBat.className;
		const Hasilnya = Hasil(pilkom, pilihanPlayer);
		const imageKomputer = document.querySelector('.komputer');
		imageKomputer.setAttribute('src', pilkom + '.png');
		const info = document.querySelector('.info')
		info.innerHTML = Hasilnya;
	})
}

const plaker = document.querySelector('.kertas')
{
	plaker.addEventListener('click', function(){
		const pilkom = fungkom();
		const pilihanPlayer = plaker.className;
		const Hasilnya = Hasil(pilkom , pilihanPlayer);
		const imageKomputer = document.querySelector('.komputer');
		imageKomputer.setAttribute('src', pilkom + '.png');
		const info = document.querySelector('.info');
		info.innerHTML = Hasilnya;
	})
}