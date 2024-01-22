var firebaseConfig = {
    databaseURL: "https://pastelaria-3b4de-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyCWyGbRlDZkbTzvmRqSeFJ7AzZumbV_Uko",
    authDomain: "pastelaria-3b4de.firebaseapp.com",
    projectId: "pastelaria-3b4de",
    storageBucket: "pastelaria-3b4de.appspot.com",
    messagingSenderId: "162634624762",
    appId: "1:162634624762:web:fb7b30e70c272663692343",
    measurementId: "G-67554V847G"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao nó principal
var mainNodeRef = firebase.database().ref();

// Função para exibir os dados dos nós em tempo real
function displayRealtimeData() {
    mainNodeRef.on('value', function (snapshot) {
        console.log('Evento on("value") acionado para o nó principal');
        var data = snapshot.val();

        // Atualizar valores nas variáveis
        var sensor1Value = parseFloat(data.sensor1);
        var sensor2Value = parseFloat(data.sensor2);
        var sensor3Value = parseFloat(data.sensor3);
        var sensor4Value = parseFloat(data.sensor4);
        var sensor5Value = parseFloat(data.sensor5);
        var sensor6Value = parseFloat(data.sensor6);
        function care2() {
            localStorage.setItem('chave1', sensor1Value);
            localStorage.setItem('chave2', sensor2Value);
            }
            
            setInterval(care2, 1000);
        
        // Exibir os valores na página
        document.getElementById('sensor1Value').textContent = isNaN(sensor1Value) ? 'N/A' : sensor1Value.toFixed(2);
        document.getElementById('sensor2Value').textContent = isNaN(sensor2Value) ? 'N/A' : sensor2Value.toFixed(2);
        document.getElementById('sensor3Value').textContent = isNaN(sensor3Value) ? 'N/A' : sensor3Value.toFixed(2);
        document.getElementById('sensor4Value').textContent = isNaN(sensor4Value) ? 'N/A' : sensor4Value.toFixed(2);
        document.getElementById('sensor5Value').textContent = isNaN(sensor5Value) ? 'N/A' : sensor5Value.toFixed(2);
        document.getElementById('sensor6Value').textContent = isNaN(sensor6Value) ? 'N/A' : sensor6Value.toFixed(2);
        var ddd = document.getElementById('mestre')
        ddd.innerText= sensor1Value + sensor2Value;
    }, function (error) {
        console.error("Erro ao ler os dados:", error);
    });
}

// Chame a função para exibir os dados em tempo real ao carregar a página
displayRealtimeData();



