//Declaración de variables

var nombreUsuario = "Jose Malé Franch";
var saldoCuenta = 5000;
var limiteExtraccion = 8000;

var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

var cuentaamiga1 = 1234567;
var cuentaamiga2 = 7654321;

var codigodeseguridad = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
iniciarSesion();



function SumarDinero(monto) {
    saldoCuenta = saldoCuenta + monto;
}

function RestarDinero(monto) {
    saldoCuenta = saldoCuenta - monto;
}

function cambiarLimiteDeExtraccion() {
    var LimiteAnterior = limiteExtraccion;
    var IngresoLimite = parseInt(prompt("Ingresar el nuevo límite de extracción"));
    limiteExtraccion = IngresoLimite;
    alert("El límite de extracción anterior era $" + LimiteAnterior + "\nEl nuevo límite es $" + limiteExtraccion);
    actualizarLimiteEnPantalla();

}

function HayDineroDisponible(monto) {
    if ((monto > saldoCuenta)) {
        return true;
    } else {
        return false
    };
}

function ValidarLimite(monto) {
    if (monto > limiteExtraccion) {
        return true;
    } else {
        return false;
    }
}

function ValidaBilletede100(monto) {
    if (monto % 100 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function extraerDinero() {
    var SaldoAnterior = saldoCuenta;
    var IngresoMonto = parseInt(prompt("Ingresar el monto a extraer"));
    if ((IngresoMonto==null) && (IngresoMonto==NaN)) {
        return;
    } else if (ValidaBilletede100(IngresoMonto) == false) {
        alert("Este cajero sólo entrega billetes de 100.");
        return;
    };
    HayDineroDisponible(IngresoMonto);
    ValidarLimite(IngresoMonto);
    if (!(HayDineroDisponible(IngresoMonto) || ValidarLimite(IngresoMonto))) {
        RestarDinero(IngresoMonto);
        alert("El saldo anterior era $" + SaldoAnterior + "\nExtrajiste $" + IngresoMonto + "\nEl monto actual es $" + saldoCuenta);
        actualizarSaldoEnPantalla();
    } else if ((ValidarLimite(IngresoMonto))) {
        alert("El monto es mayor al límite de extracción permitido.");
    } else if (HayDineroDisponible(IngresoMonto)) {
        alert("El monto es mayor al dinero disponible.");
    } else { return; }
}


function depositarDinero() {
    var SaldoAnterior = saldoCuenta;
    var IngresoMonto = parseInt(prompt("Ingresar el monto del depósito"));
    SumarDinero(IngresoMonto);
    alert("El saldo anterior era $" + SaldoAnterior + "\nDepositaste $" + IngresoMonto + "\nEl monto actual es $" + saldoCuenta);
    actualizarSaldoEnPantalla();

}

function pagarServicio() {
    var SaldoAnterior = saldoCuenta;
    var servicio = parseInt(prompt("Ingrese el número del servicio a pagar. Siendo:" + "\n1 Agua" + "\n2 Luz" + "\n3 Internet" + "\n4 Teléfono"));
    if ((servicio==null) && (servicio==NaN)) {
        return;
    }


    switch (servicio) {
        case 1:
            HayDineroDisponible(agua);
            if (!(HayDineroDisponible(agua))) {
                saldoCuenta = (saldoCuenta - agua);
                alert("El saldo anterior era $" + SaldoAnterior + "\nPagaste $" + agua + "\nEl monto actual es $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            } else {
                alert("No cuenta con el saldo suficiente para abonar el servicio.");
                return;
            }

        case 2:
            HayDineroDisponible(luz);
            if (!(HayDineroDisponible(luz))) {
                saldoCuenta = (saldoCuenta - luz);
                alert("El saldo anterior era $" + SaldoAnterior + "\nPagaste $" + luz + "\nEl monto actual es $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            } else {
                alert("No cuenta con el saldo suficiente para abonar el servicio.");
                return;
            }


        case 3:
            HayDineroDisponible(internet);
            if (!(HayDineroDisponible(internet))) {
                saldoCuenta = (saldoCuenta - internet);
                alert("El saldo anterior era $" + SaldoAnterior + "\nPagaste $" + internet + "\nEl monto actual es $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            } else {
                alert("No cuenta con el saldo suficiente para abonar el servicio.");
                return;
            }

        case 4:
            HayDineroDisponible(telefono);
            if (!(HayDineroDisponible(telefono))) {
                saldoCuenta = (saldoCuenta - telefono);
                alert("El saldo anterior era $" + SaldoAnterior + "\nPagaste $" + telefono + "\nEl monto actual es $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            } else {
                alert("No cuenta con el saldo suficiente para abonar el servicio.");
                return;
            }
        default:
            alert("El número ingresado no corresponde a un servicio.")
            return;
    }
}



function transferirDinero() {
    var SaldoAnterior = saldoCuenta;
    var montotransferencia = parseInt(prompt("Ingrese el monto a transferir."));
    if ((montotransferencia==null) && (montotransferencia==NaN)) {
        return;
    }
    HayDineroDisponible(montotransferencia);
    if (!(HayDineroDisponible(montotransferencia))) {
        ingresocuentaamiga = parseInt(prompt("Ingrese la cuenta amiga a la cual transferir."));
        if ((ingresocuentaamiga == cuentaamiga1) || (ingresocuentaamiga == cuentaamiga2)) {
            saldoCuenta = (saldoCuenta - montotransferencia);
            alert("El saldo anterior era $" + SaldoAnterior + "\nTransferiste $" + montotransferencia + "\nA la cuenta:" + ingresocuentaamiga + "\nEl monto actual es $" + saldoCuenta);
            actualizarSaldoEnPantalla();
        } else {
            (!(ingresocuentaamiga == cuentaamiga1) && (ingresocuentaamiga == cuentaamiga2))
            alert("La cuenta no se encuentra registrada, intente nuevamente.");
            return;
        }
    } else { alert("No contás con el saldo suficiente."); }
}

function validaIngreso(codigo){
    if ((codigo !== null) && (codigo!== NaN) && (codigo == codigodeseguridad)) {
        alert("Bienvenidx, " + nombreUsuario);
    }
    else if ((codigo==null) || (codigo==NaN)) {
        return;
    }
    else {((codigo !== codigodeseguridad))
    alert("El código ingresado es incorrecto. El dinero de la cuenta se retuvo por cuestiones de seguridad.");
    saldoCuenta = 0;
    nombreUsuario= null;
    cargarNombreEnPantalla(nombreUsuario);
    }
}
function iniciarSesion() {
    var ingresoCodigoSeguridad = parseInt(prompt("Ingrese el código de seguridad."));
    validaIngreso(ingresoCodigoSeguridad);
}




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}