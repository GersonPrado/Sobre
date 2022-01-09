/*
	Query para remover registros duplicados em tabelas sem Primary Key.
*/
Select * Into #tb_operacao_liquidado From
(	Select 
		operacao.numero_contrato, 
		operacao.cnpj_cpf, 
		max(operacao.data_referencia) data_referencia, 
		operacao.data_recebimento 
	From 
		dbo.tb_operacao_liquidacao operacao
	Where operacao.data_recebimento is not null	
	Group by
		operacao.numero_contrato, 
		operacao.cnpj_cpf, 		
		operacao.data_recebimento 
) As x

Delete operacao From tb_operacao_liquidacao operacao
Inner Join #tb_operacao_liquidado liquidado on operacao.numero_contrato = liquidado.numero_contrato 
	And operacao.cnpj_cpf = liquidado.cnpj_cpf 
	And operacao.data_referencia != liquidado.data_referencia

Select * Into #tb_operacao_ativo From
(	Select 
		operacao.numero_contrato, 
		operacao.cnpj_cpf, 
		max(operacao.data_referencia) data_referencia, 
		operacao.data_recebimento 
	From 
		dbo.tb_operacao_liquidacao operacao
	Where operacao.data_recebimento is null	
	Group by
		operacao.numero_contrato, 
		operacao.cnpj_cpf, 		
		operacao.data_recebimento 
) As y

Delete operacao From tb_operacao_liquidacao operacao
Inner Join #tb_operacao_ativo ativo on operacao.numero_contrato = ativo.numero_contrato 
	And operacao.cnpj_cpf = ativo.cnpj_cpf 
	And operacao.data_recebimento is null
	And operacao.data_referencia != ativo.data_referencia

Drop table #tb_operacao_ativo
Drop table #tb_operacao_liquidado

Select * From tb_operacao_liquidacao