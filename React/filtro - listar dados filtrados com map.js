const handleLogs = () => {
    return (
      logs.map((logs) => {
        if(logs.descricao_falha == 'Normal' || logs.descricao_falha == 'Subtensão de Rede' ){
          return (
            <RowList>
              <text>{logs.id_cruzamento}</text>
              <text>{logs.agente}</text>
              <text>{logs.descricao_falha}</text>
              <text>{logs.tipo}</text>
              <text>{logs.data}</text>
              <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
              {/* Colocar o id do log para excluir */}
            </RowList>
          )
        }
        
      })
    )
  }
  
  //-------------------------------------------------------------------------------------------------------------------------
  
	//estados filtros:
  //agente:
  const [sistema, setSistema] = useState('');
  const [desenvolvimento, setDesenvolvimento] = useState('');
  //descrição:
  const [offline, setOffline] = useState('');
  const [imposicao, setImposicao] = useState('');
  const [perdaComunicacao, setPerdaComunicacao] = useState('');
  const [faltaEnergia, setFaltaEnergia] = useState('');
  const [subtensao, setSubtensao] = useState('');
  const [normal, setNormal] = useState('');
  //tipo:
  const [operacao, setOperacao] = useState('');
  const [status, setStatus] = useState('');
  
  //remover valor do input chekbox:
    <Checkbox name="checkedC" color="primary" value="Perda de Comunicação" 
		onChange={(e) => perdaComunicacao === '' ? setPerdaComunicacao(e.target.value) : setPerdaComunicacao('')}
	/>
  
   const handleLogs = () => {
    return (
      logs.map((logs) => {
        const descricao = logs.descricao_falha;
        const filtrotipo = logs.tipo;
        const filtroagente = logs.agente;

        if(descricao == offline || descricao == imposicao || descricao == perdaComunicacao || 
           descricao == faltaEnergia || descricao == subtensao  || descricao == normal){
          return (
            <RowList>
              <text>{logs.id_cruzamento}</text>
              <text>{logs.agente}</text>
              <text>{logs.descricao_falha}</text>
              <text>{logs.tipo}</text>
              <text>{logs.data}</text>
              <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
              {/* Colocar o id do log para excluir */}
            </RowList>
          )
        }
        if(filtrotipo == operacao || filtrotipo == status){
          return (
            <RowList>
              <text>{logs.id_cruzamento}</text>
              <text>{logs.agente}</text>
              <text>{logs.descricao_falha}</text>
              <text>{logs.tipo}</text>
              <text>{logs.data}</text>
              <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
              {/* Colocar o id do log para excluir */}
            </RowList>
          )
        }
        if(filtroagente == sistema || filtroagente == desenvolvimento){
          return (
            <RowList>
              <text>{logs.id_cruzamento}</text>
              <text>{logs.agente}</text>
              <text>{logs.descricao_falha}</text>
              <text>{logs.tipo}</text>
              <text>{logs.data}</text>
              <Trash2 size={18} className="mr-4" style={{'cursor':'pointer'}} onClick={() => {setAlert(true)}}/>
              {/* Colocar o id do log para excluir */}
            </RowList>
          )
        }
        
      })
    )
  }