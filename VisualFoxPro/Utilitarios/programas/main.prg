_screen.Caption = "Utilitários"
_screen.Visible = .T.
_screen.AutoCenter = .T.

set Default To "d:\portifolio\visualfoxpro\utilitarios"
set path to .\programas;.\classes;.\formularios
set Classlib To biblioteca

Set Procedure to commons addi 
 
GeraMemoria()

do form MenuPrincipal
read events
