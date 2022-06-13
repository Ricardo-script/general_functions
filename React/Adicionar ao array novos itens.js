import React,{ useState } from 'react';
import NavBar from '../../components/NavBar';
import { FaBoxOpen } from "react-icons/fa";
import acai from '../../assets/temp/acai.png';
import refri from '../../assets/temp/refri.png';
import { Container, ContentPdv, BoxProdutos, Title, Products, Card, AreaPdv,
BoxSelect, SelectProduct,LabelFloat,Rows, Input, Label, BoxTotal, Areasum, AreaPay } from './styles';

export default function Pdv(){

   
    const[id, setId] = useState(0);
    const[logoProduto, setLogoProduto] = useState('')
    const[codigo, setCodigo] = useState('');
    const[descricao, setDescricao] = useState('');
    const[preco, setPreco] = useState('');
    const[qtd, setQtd] = useState('');
    //const[total, setTotal] = useState('');

    const[pedidos, setPedidos] = useState([]);
     

    const handleAdd = () => {
        
        if([codigo,descricao,preco,qtd].includes('')){
            alert('Por favor ainda faltam campos vazios,por favor preencher tudo!')
        } else{

            setId(id + 1);
            let newDataElement = {
                id: id,
                logoProduto: '#',
                codigo: codigo,
                descricao: descricao,
                preco: preco,
                qtd: qtd,
                acao: 'X'
            }

            const newStateData = [...pedidos, newDataElement ];
            setPedidos(newStateData);

            console.log(newStateData);
            //console.log(pedidos);// o state não atualiza de primeira

            setCodigo('');
            setDescricao('');
            setPreco('');
            setQtd('');
        }
        
    }

    return(
        <Container>
            <NavBar />
            <ContentPdv>
                <BoxProdutos>
                    <Title><FaBoxOpen />Produtos</Title>
                    <Products>
                        <Card>
                            <img src={acai} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={refri} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={acai} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={refri} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={acai} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={refri} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={acai} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={refri} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={acai} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                        <Card>
                            <img src={refri} alt="x" />
                            <div className='areaDescription'>
                                <span className='description'>Açaí tradicional</span>
                                <span className='price'>10,50</span>
                            </div>
                        </Card>
                    </Products>
                </BoxProdutos>
                <SelectProduct>
                    <Rows>
                        <LabelFloat>
                            <Input type="text" placeholder=" " className='codigo' 
                               value={codigo} onChange={(e) => setCodigo(e.target.value)}
                            />
                            <Label>Código do produto</Label>
                        </LabelFloat>
                        <LabelFloat>
                            <Input type="text" placeholder=" " className='produto' 
                                value={descricao} onChange={(e) => setDescricao(e.target.value)}
                            />
                            <Label>Produto</Label>
                        </LabelFloat>
                    </Rows>
                    <Rows>
                        <LabelFloat>
                            <Input type="text" placeholder=" " className='quantidade'
                                value={qtd} onChange={(e) => setQtd(e.target.value)}
                            />
                            <Label>Quantidade</Label>
                        </LabelFloat>
                        <LabelFloat>
                            <Input type="text" placeholder=" " className='preco'
                                value={preco} onChange={(e) => setPreco(e.target.value)}
                            />
                            <Label>Preço</Label>
                        </LabelFloat>
                        <div className="areaButton">
                            <button id="add" onClick={handleAdd}>Adicionar</button>
                            <button id="endPov">Finalizar pedido</button>
                        </div>
                    </Rows>
                </SelectProduct>
                <AreaPdv>
                    <BoxSelect>
                        <Title><FaBoxOpen />Selecionados</Title>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Código</th>
                                    <th>Produto</th>
                                    <th>Qtd</th>
                                    <th>Preço</th>
                                    <th>Total</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pedidos.map( item => (
                                    <tr key={item.id}>
                                        <td>{item.logoProduto}</td>
                                        <td>{item.codigo}</td>
                                        <td>{item.descricao}</td>
                                        <td>{item.preco}</td>
                                        <td>{item.qtd}</td>
                                        <td>{item.id === '' ? '' : 'R$ ' + parseInt(item.qtd) * parseInt(item.preco)}</td>
                                        <td>{item.acao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </BoxSelect>
                    <BoxTotal>
                        <Areasum>
                            <h4>Total</h4>
                            <h3>R$ 79,90</h3>
                        </Areasum>
                        <AreaPay>
                            <select>
                                <option value="" >Dinheiro</option>
                                <option value="" >Débito</option>
                                <option value="" >Crédito</option>
                                <option value="" >Pix</option>
                            </select>
                            <button>Confirmar</button>
                        </AreaPay>
                    </BoxTotal>
                </AreaPdv>
            </ContentPdv>
        </Container>
    );
}