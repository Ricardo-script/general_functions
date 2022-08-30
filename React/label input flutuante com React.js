<LabelFloat>
  <Input type="text" placeholder=" "/>
  <Label>Teste</Label>
</LabelFloat>

export const LabelFloat = styled.div`
    position: relative;
    padding-top: 13px;

    input{
        &:required:invalid + label{
            color: red;
        }

        &:focus:required:invalid{
            border-bottom: 2px solid red;
        }

        &:required:invalid + label:before{
            content: '*';
        }
        &:focus + label{
            font-size: 13px;
            margin-top: 0;
            color: #3951b2;
        }
        &:not(:placeholder-shown) + label{
            font-size: 13px;
            margin-top: 0;
            color: #3951b2;
        }
    }
`;

export const Input = styled.input`
    border: 0;
    border-bottom: 2px solid lightgrey;
    outline: none;
    min-width: 180px;
    font-size: 16px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -webkit-appearance:none;
    border-radius: 0;

    &:focus{
        border-bottom: 2px solid #3951b2;
    }

    &::placeholder{
        color:transparent;
    }
`;

export const Label = styled.label`
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 13px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
`;