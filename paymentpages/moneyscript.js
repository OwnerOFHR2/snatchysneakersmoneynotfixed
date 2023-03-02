let money = "money"; 

 if(!localStorage.getItem(money)) {
    localStorage.setItem(money, 60000); 
 }

const orderpd = document.querySelector('.orderpd');
const orderj5br = document.querySelector('.orderj5br');
const orderj5b = document.querySelector('.orderj5b');
const orderj5bv = document.querySelector('.orderj5bv');
const orderj5bb = document.querySelector('.orderj5bb');
const orderfr = document.querySelector('.orderfr');
const ordergi2 = document.querySelector('.ordergi2');
const ordersp = document.querySelector('.ordersp');
const orderjc = document.querySelector('.orderjc');
const orderof = document.querySelector('.orderof');
const orderag = document.querySelector('.orderag');
const ordersply = document.querySelector('.ordersply');
const orderslides = document.querySelector('.orderslides');


fetch('airforces.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderaf = doc.querySelector('.orderaf');
    orderaf.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");
    console.log('work');
  } else {
    localStorage.setItem(money, currentMoney - 100);
    console.log('work');
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('cement3.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const ordercement3 = doc.querySelector('.ordercement3');
    ordercement3.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 320);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('pandadunks.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderpd = doc.querySelector('.orderpd');
    orderpd.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 120);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('jordan5br.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderj5br = doc.querySelector('.orderj5br');
    orderj5br.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 150);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('jordan5b.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderj5b = doc.querySelector('.orderj5b');
    orderj5b.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 120);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  
  fetch('jordan5bv.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderj5bv = doc.querySelector('.orderj5bv');
    orderj5bv.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 160);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('jordan5bb.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderj5bb = doc.querySelector('.orderj5bb');
    orderj5bb.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 110);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('foamrunners.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderfr = doc.querySelector('.orderfr');
    orderfr.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 235);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('giannis.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const ordergi2 = doc.querySelector('.ordergi2');
    ordergi2.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 80);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('scottphantom.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const ordersp = doc.querySelector('.ordersp');
    ordersp.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 430);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('chicago1.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderjc = doc.querySelector('.orderjc');
    orderjc.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 380);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('offwhite.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderof = doc.querySelector('.orderof');
    orderof.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 1500);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

  fetch('airmags.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderag = doc.querySelector('.orderag');
    orderag.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 55000);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });

    fetch('sply350.html')
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const ordersply = doc.querySelector('.ordersply');
      ordersply.addEventListener('click', () => {
        let currentMoney = parseInt(localStorage.getItem(money));
    if (currentMoney == 0 || currrentMoney <= 0) {
      alert("ERROR. You have no money.");;
    } else {
      localStorage.setItem(money, currentMoney - 360);
      document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
    }
      });
    });
  });

  fetch('slides.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const orderslides = doc.querySelector('.orderslides');
    orderslides.addEventListener('click', () => {
      let currentMoney = parseInt(localStorage.getItem(money));
  if (currentMoney == 0 || currrentMoney <= 0) {
    alert("ERROR. You have no money.");;
  } else {
    localStorage.setItem(money, currentMoney - 250);
    document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
  }
    });
  });

document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);