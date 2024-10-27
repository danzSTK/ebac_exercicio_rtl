import App from "../App";
import { render, screen } from "@testing-library/react";

describe('Testando a aplicação completa <App />', () => {
    it('Esperando a renderização certa do component principal', () => { 
        const { debug } = render(<App/>);

        debug()
        expect(screen.getByTestId('btn-submit-comment')).toBeInTheDocument();
    });
})