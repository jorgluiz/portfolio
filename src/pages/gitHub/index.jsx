import GridLayout from "../../ui/components/layout/gridLayout"
import { Container } from "./styles"

const GitHub = () => {
    return (
        <GridLayout>
            <Container>
                <p>#  fluxo de trabalho</p><br />
                <p>padrão baseado gitflow:</p><br />
                <p><strong>Prefixo:</strong> Chore = não se refere uma (features)</p><br />
                <p><strong>Prefixo:</strong> Fix = arrumar um bug</p><br />
                <p><strong>Prefixo:</strong> Features = funcionalidade</p><br />
            </Container>
        </GridLayout>
    )
}

export default GitHub