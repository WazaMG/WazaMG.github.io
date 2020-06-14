   let guessSubmit = document.getElementById("submit");
    let resetbutton = document.getElementById("reset");
        function ajouter(){
                let guessPrenom = document.querySelector('.guessPrenom');
                let guessNom = document.querySelector('.guessNom');
                let RIB = document.querySelector('.RIB');
                let montant = document.querySelector('.montant');
                var prenom = document.createTextNode(guessPrenom.value);
                var nom = document.createTextNode(guessNom.value);
                var banque = document.createTextNode(RIB.value);
                var soussou = document.createTextNode(montant.value);
                if (guessPrenom.value!=='' && guessNom.value!=='' && RIB.value!=='' && montant.value!=='') {
                    let table = document.querySelector('.body');
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    table.appendChild(tr);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    td1.appendChild(prenom);
                    td2.appendChild(nom);
                    td3.appendChild(banque);
                    td4.appendChild(soussou);
                }
        }


        function supprimer(){
            let table = document.querySelector('.body');
            table.innerHTML = '';
        }
        guessSubmit.addEventListener('click', ajouter);
        resetbutton.addEventListener('click', supprimer);
