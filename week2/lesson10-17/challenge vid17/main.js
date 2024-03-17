let Title = "Elzero", Description = "Elzero Web School",Date = "25/10";
let Card = `
<div class="card">
<h3>Hello ${Title}</h3>
<p>${Description}</p>
<span>${Date}</span>
</div>
`;
document.write(Card.repeat(4));
