// i = 0;
// j = 0;

// function setParaContent(para) {
//     const paraDOM = document.getElementById(para);
//     switch (para) {
//         case 'firstPara':
//             paraDOM.innerHTML = ++i;
//             break;
//         case 'secondPara':
//             paraDOM.innerHTML = ++j;
//             break;
//     }
// }

class ParaButtonCombo {
    i;
    paraId;

    constructor(paraId) {
        this.i = 0;
        this.paraId = paraId;
        this.setContent();
    }

    setContent = () => {
        const paraDOM = document.createElement('p');
        paraDOM.id = this.paraId;
        paraDOM.innerHTML = this.i;
        const buttonDOM = document.createElement('button');
        buttonDOM.addEventListener('click', this.setParaContent);
        buttonDOM.innerHTML = 'Increment ' + this.paraId;
        document.body.appendChild(paraDOM);
        document.body.appendChild(buttonDOM);
    }

    setParaContent = () => {
        const paraDOM = document.getElementById(this.paraId);
        paraDOM.innerHTML = ++this.i;
    }
}

// INSTANTIATE
new ParaButtonCombo('firstPara');
new ParaButtonCombo('secondPara');
new ParaButtonCombo('p1');
new ParaButtonCombo('p2');
new ParaButtonCombo('p25');
new ParaButtonCombo('p96');
new ParaButtonCombo('p55');
new ParaButtonCombo('h5');
new ParaButtonCombo('y7');
