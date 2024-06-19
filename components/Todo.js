
export default {
	name: 'Home',
	template: /*html*/`
<div id="home" class="container-fluid">

	<h1>Att göra</h1>

	<h2>I närheten</h2>

	<h4>Uppleva</h4>

	<h5>Torparvägen</h5>
	Inom promenadavstånd finns den den gamla vägen som kallas torparvägen. Idag är vägen en skogsbilväg,
	men längs vägen finns mängder av spår från gamla torp och backstugor. Håll utkik efter små skyltar i
	aluminium längs vägen som visar var bosättningarna har funnits.

	<div id="map-container-torparvagen" class="z-depth-1-half map-container col-lg-6" style="height: 500px">
		<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d10101.590200521585!2d13.63977305922729!3d56.5768873358336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d56.567270799999996!2d13.610966999999999!4m3!3m2!1d56.584246699999994!2d13.6227875!5e1!3m2!1sen!2sse!4v1678828416075!5m2!1sen!2sse"
		width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</div>

	<h5>Tannsjö jaktslott</h5>

	<p>Tannsjönäs jaktsällskap instiftades år 1847 av den danske baronen Carl-Fredrik von Blixen-Finecke.
	Jaktsällskapet arrenderade stora mängder mark i Hinneryds socken i Markaryds kommun, där man funnit idealiska
	förhållanden att jaga skogsfågel. Baronen byggde först en jaktstuga, men efter bara några år uppförde baronens
	svåger, prins Fredrik af Hessen ett jaktslott, det hittills enda slottet i hela Sunnerbo härad.</p>

    <p>Till detta jaktslott, otroligt vackert beläget på en halvö ute på en ljunghed på Tannsjönäs mellan Tannsjön och
    Hultasjön, färdades kungligheter och adel från norra Europa under ett par decennier mellan 1847 och 1875. Hit kom
    prins Kristian, den danske tronföljaren som sedermera blev Kristian IX, den svenske kungen Karl XV, den tyske
    järnkanslern Otto von Bismarck, grevar,baroner och officerare. En hel del om vad som utspelades vid dessa besök
    finns också nedtecknat och bevarat för eftervärlden.</p>

    <p>Jaktsslottet brann ner i november 1875 och jaktsällskapet upplöstes. Idag finns en minnessten på platsen.</p>

	<div id="map-container-jaktslott" class="z-depth-1-half map-container col-lg-6" style="height: 500px">
		<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6036.6997149365325!2d13.603974634984445!3d56.54819499879837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDMyJzUzLjUiTiAxM8KwMzYnMzAuMSJF!5e1!3m2!1sen!2sse!4v1678741079911!5m2!1sen!2sse"
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</div>

	<h5>Freden i Knäred</h5>
	<p>Trots namnet så slöts inte freden i Knäred, utan i byn Sjöared. Idag finns en minnesplats för freden i Sjöared.
	Mer information on freden finns på <a href="https://sv.wikipedia.org/wiki/Freden_i_Kn%C3%A4red">Wikipedia</a>.

	<div id="map-container-knared" class="z-depth-1-half map-container col-lg-6" style="height: 500px">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11083.7135818247!2d13.477831966866743!3d56.512275279537185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46516b1cc9fd907d%3A0x45b99fa309b7f8c!2sTreaty%20of%20Kn%C3%A4red!5e0!3m2!1sen!2sse!4v1678740919730!5m2!1sen!2sse"
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</div>

	<h5>Kungamötet i Fagerdala</h5>
	<p>År 1304 möttes i Fagerdala de båda dubbelsvågrarna konung Birger Magnusson i Sverige och Erik Menved af Danmark
	jämte deras drottningar Märta och Ingeborg. Vid detta s. k. Fagerdala möte ägde lysande tornerspel rum och efter
	dem blef ett stort riddarslag, hvarvid konung Birger förlänade icke mindre än tolf män denna värdighet. Här blef
	äfven, säges det, konungens son, den blott fyraårige hertig Magnus, korad till faderns efterträdare. Olyckliga
	omständigheter gjorde emellertid att den unge fursten aldrig fick bära Sveriges krona. Antagligen behandlades här
	äfven tvisten mellan konung Birger och hans bröder, de sedermera vid Nyköpings gästabud omkomna hertigarna Erik och
	Valdemar, hvilka äfven uppehöllo sig i närheten.</p>

<!-- TODO
	<div id="map-container-fagerdala" class="z-depth-1-half map-container col-lg-6" style="height: 500px">
	</div>
-->

	<h4>Bad</h4>
	<h5>Hinneryd</h5>
	<p>Badplatsen i Hinnerydssjön är liten men trevlig. Här finns en liten sandstrand med en brygga, och en flytbrygga
	en bit ut i vattnet.</p>

	<div id="map-container-hinneryd" class="z-depth-1-half map-container col-lg-6" style="height: 500px">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5380.560694428981!2d13.608491176107917!3d56.61006777621086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465115b571112525%3A0x37ba64ec481c0d6f!2sHinnerydssj%C3%B6arnas%20badplats!5e1!3m2!1sen!2sse!4v1678829230680!5m2!1sen!2sse"
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</div>

	<h5>Risasjön</h5>
	<p>Det här är badupplevelsen för den äventyrslystne! För att ta dig till badplatsen behöver du gå ca 500 meter
	på en liten stig genom skog och myr, väl framme hittar du en pytteliten strand. Risken att störas av andra
	badgäster är minimal.</p>

	<p>Det sägs att sjön i Risböke förr i tiden var en mycket populär badsjö. Idag är vattnet ganska grumligt, så man får
	räkna med att man får ta en dusch efter badet.</p>


	<div id="map-container-risboke" class="z-depth-1-half map-container col-lg-6" style="height: 500px">
		<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1507.2190744563286!2d13.58598967091161!3d56.59723897983427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTbCsDM1JzUwLjEiTiAxM8KwMzUnMTcuNiJF!5e1!3m2!1sen!2sse!4v1678645012438!5m2!1sen!2sse"
		width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</div>

	<h2>Markaryds kommun</h2>

	<p><a href="https://www.markaryd.se/sidor/uppleva-och-gora.html">Uppleva och göra</a></p>
	<p><a href="https://storymaps.arcgis.com/stories/5f488af359924ed393cf8e591dc3be78">Upplevelsekarta</a></p>
	<p><a href="https://markaryd.com/utflykt/">https://markaryd.com/utflykt/</a></p>

</div>
  `
}
