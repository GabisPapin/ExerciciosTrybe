let player = {
    name:'Marta',
    lastName:'Silva',
    age:34,
    medals: {
        golden: 2,
        silver: 3,
    }
}
//console.log('A jogadora ' + player.name + " " + player.lastName + ' tem ' + player.age + ' anos de idade.');


/*player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
player['fullName'] = player.name + ' ' + player.lastName;

//console.log('A jogadora ' + player['fullName'] + ' foi eleita a melhor do mundo por 6 vezes.')
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')
*/
for (let key in player){
    console.log(player[key]); 
}