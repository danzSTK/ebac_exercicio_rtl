import { render, screen } from "@testing-library/react"
import Post from ".."

describe('Testando o componete <Post />', () => {
    it('Deve renderizar o componente Post com o children "teste"', () => {
        
        const { debug } = render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        )
        debug()
        expect(screen.getByText('Teste')).toBeInTheDocument();
    })
}) 