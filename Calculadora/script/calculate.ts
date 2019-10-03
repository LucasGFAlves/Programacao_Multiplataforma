let accumulation: number = 0;
let flagNewNum: boolean = false;
let pendingOperation: string = "";
//Abaixo estamos adcionando os valores de cada botão ao parametro Num
function NumPressed(num:number)
{
    if (flagNewNum)
	{
        document.form_calculate.text_calculate.value = num;
        flagNewNum = false;
    }
    else 
	{
        if (document.form_calculate.text_calculate.value == "0")
            document.form_calculate.text_calculate.value = num;
        else
            document.form_calculate.text_calculate.value += num;
    }
}
//Valores de exibição quando apertado o botão igual
function Operation(typeOperation) 
{
    if (document.form_calculate.text_calculate.value == "") 
	{
        alert("O Campo esta vázio digite um valor");
        document.form_calculate.text_calculate.value = "0";
		        
    }
    else 
	{
        if (flagNewNum && pendingOperation !== "=")
		{
			accumulation = (parseFloat(document.form_calculate.text_calculate.value) * -1);
			document.form_calculate.text_calculate.value = accumulation;
		}
        else 
		{
            flagNewNum = true;
            if ('+' === pendingOperation)
                accumulation += parseFloat(document.form_calculate.text_calculate.value);
            else if ('-' === pendingOperation)
                accumulation -= parseFloat(document.form_calculate.text_calculate.value);
            else if ('/' === pendingOperation)
                accumulation /= parseFloat(document.form_calculate.text_calculate.value);
            else if ('*' === pendingOperation)
                accumulation *= parseFloat(document.form_calculate.text_calculate.value);
            else if ('%' === pendingOperation)
                accumulation %= parseFloat(document.form_calculate.text_calculate.value);
            else
                accumulation = parseFloat(document.form_calculate.text_calculate.value);
            document.form_calculate.text_calculate.value = accumulation;
            pendingOperation = typeOperation;
        }
    }
}
//Atribuindo o ponto( . ) aos valores numéricos
function Point() 
{
    let currentText: string = document.form_calculate.text_calculate.value;
    if (flagNewNum) 
	{
        currentText = "0.";
        flagNewNum = false;
    }
    else 
	{
        if (currentText.indexOf(".") == -1)
            currentText += ".";
    }
    document.form_calculate.text_calculate.value = currentText;
}
