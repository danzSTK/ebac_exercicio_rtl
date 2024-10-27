import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentarios ao post', () => {
        const { debug } = render(<PostComment />);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Comentário adicionado via teste',
            }
        });
        fireEvent.click(screen.getByTestId('btn-submit-comment'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Segundo comentário adicionado via teste',
            }
        });
        fireEvent.click(screen.getByTestId('btn-submit-comment'));

        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        expect(screen.getAllByTestId('comentarios')).toHaveLength(2)
    })
});