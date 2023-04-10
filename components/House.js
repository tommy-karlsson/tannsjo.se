
export default {
	name: 'Home',
	template: /*html*/`
<div id="home" class="container-fluid">

	<h1>Om huset</h1>

	<h2>Invändigt</h2>
	
	<h4>Kök</h4>

	<div id="kitchenCarousel" class="carousel slide" data-bs-ride="carousel">
	  <div class="carousel-inner">
		<div class="carousel-item active">
		  <img src="images/kitchen.jpeg" class="d-block w-100">
		</div>
		<div class="carousel-item">
		  <img src="images/matplats.jpeg" class="d-block w-100" alt="...">
		</div>
		<div class="carousel-item">
		  <img src="images/vedspis.jpeg" class="d-block w-100" alt="...">
		</div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#kitchenCarousel" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#kitchenCarousel" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	  </button>
	</div>

	<p>
	I köket finns diskmaskin, induktionshäll, ugn, microvågsugn, kylskåp och matplats.
	Här finns även en vedspis som kan användas för extra uppvärmning, eller för att
	laga mat.
	</p>
	<h4>Badrum</h4>

	<div id="bathroomCarousel" class="carousel slide" data-bs-ride="carousel">
	  <div class="carousel-inner">
		<div class="carousel-item active">
		  <img src="images/handfat.jpeg" class="d-block w-100">
		</div>
		<div class="carousel-item">
		  <img src="images/dusch.jpeg" class="d-block w-100" alt="...">
		</div>
		<div class="carousel-item">
		  <img src="images/tvatt.jpeg" class="d-block w-100" alt="...">
		</div>
		<div class="carousel-item">
		  <img src="images/wc.jpeg" class="d-block w-100" alt="...">
		</div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#bathroomCarousel" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#bathroomCarousel" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	  </button>
	</div>

	<p>
	I badrummet finns WC, handfat, dusch, handdukstork, grovdiskbänk och tvättmaskin.
	</p>
	<h4>Sovrum</h4>

	<div id="bedroomCarousel" class="carousel slide" data-bs-ride="carousel">
	  <div class="carousel-inner">
		<div class="carousel-item active">
		  <img src="images/stures_kammare.jpeg" class="d-block w-100">
		</div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#bedroomCarousel" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#bedroomCarousel" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	  </button>
	</div>

	<p>
	På bottenvåningen finns ett mindre sovrum med en våningssäng.
	På ovanvåningen finns ett mindre sovrum med två enkelsängar, samt ett större sovrum med
	tre enkelsängar. I det mindre sovrummet finns en kamin som kan användas för extra uppvärmning
	eller för att koka morgon-kaffet.
	</p>
	<h4>Vardagsrum</h4>

	<div id="livingRoomCarousel" class="carousel slide" data-bs-ride="carousel">
	  <div class="carousel-inner">
		<div class="carousel-item active">
		  <img src="images/living_room.jpeg" class="d-block w-100">
		</div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#livingRoomCarousel" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#livingRoomCarousel" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	  </button>
	</div>

	<p>
	I vardagsrummet finns soffa, soffbord och en TV.
	</p>
	<h4>Matsal</h4>

	<div id="diningCarousel" class="carousel slide" data-bs-ride="carousel">
	  <div class="carousel-inner">
		<div class="carousel-item active">
		  <img src="images/matsal1.jpeg" class="d-block w-100">
		</div>
		<div class="carousel-item">
		  <img src="images/matsal2.jpeg" class="d-block w-100" alt="...">
		</div>
	  </div>
	  <button class="carousel-control-prev" type="button" data-bs-target="#diningCarousel" data-bs-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	  </button>
	  <button class="carousel-control-next" type="button" data-bs-target="#diningCarousel" data-bs-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	  </button>
	</div>

	<p>
	I matsalen finns matplats och en kakelugn.
    </p>


	<h2>Omgivning</h2>
	<p>
	Huset ligger längs en mindre grusväg där endast ett fåtal bilar passerar per dag. I direkt anslutning
	till huset finns betesmark och skog. Området är rikt på vilt såsom älg, rådjur och hare. På
	försommaren hör det till vanligheterna att rådjuren betar på åkern utanför köksfönstret vid frukost.
	</p>

	<img src="images/roe_deer.jpeg" class="img-fluid"/>

	<p>
	Det finns utmärkta möjligheter till skogspromenader i närområdet. På sensommar och höst finns det gott
	om svamp, blåbär och lingon för den som känner sig manad.
	</p>
</div>
  `
}
