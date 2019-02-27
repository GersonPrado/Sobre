Function sair()
	close All	
	Quit	
end function

Function geraMemoria()
	Close Databases
	Create Cursor curMemoria (numero number(15,2), sequencia integer, operacao char(1))
	Select curMemoria
