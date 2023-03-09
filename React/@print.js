
import styled from 'styled-components';

const Container = styled.div`
  /* estilos padrão para o Container */

    @media print {
    /* estilos para impressão */
    /* definir a orientação da página para horizontal ou vertical */
        @page {
            size: A4 landscape; /* para impressão horizontal */
            /* ou */
            size: A4 portrait; /* para impressão vertical */
        }

        /* aplicar estilos à tabela para impressão */
        table {
        /* estilos para impressão da tabela */
        }

        /* instruir a impressora a quebrar a página após a tabela */
        table:last-child {
            page-break-after: always;
        }

        /* esconder o elemento com a classe no-print */
        .no-print {
            display: none;
        }
    }
`;
