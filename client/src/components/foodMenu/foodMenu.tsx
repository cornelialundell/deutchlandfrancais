import styled from "styled-components";
import { Heading } from "../globalStyles/Heading";
import { P } from "../globalStyles/P-style";
import { Wrapper } from "../globalStyles/Wrapper";



export const FoodMenu = () => { 
    return (
        <Wrapper>
        <Heading>Meny</Heading>
        <Heading size="2em" clr="#8979B9">Förrätter</Heading>
        <P width="auto" bg="none">Escargots<br/>
Smörstekta sniglar med ett knäckigt osttäcke<br/><br/>

Pfeifferbeiser<br/>
Lufttorkad ölkorv smaksatt med vitlök, paprika och peppar<br/><br/>

Trois petits fromages<br/>
Tre små ostar utvalda av kocken (le coq)
</P>
<Heading size="2em" clr="#8979B9">Varmrätter</Heading>
<P width="auto" bg="none">Bouillabaisse<br/>
Fisk och skaldjursgryta, serveras med aioli och bröd<br/><br/>

Boeuf Bourguignon<br/>
Mustig, vinkokt köttgryta<br/><br/>

Schnitzel mit kartoffeln<br/>
Panerat och friterat kalvkött med ugnsrostad potatis<br/><br/>

Currywurst<br/>
Skivad bratwurst toppad med kryddig tomatsås, curry-<br/>
 och paprikapulver. Serveras med pommes
</P>
<Heading size="2em" clr="#8979B9">Efterrätter</Heading>
<P width="auto" bg="none">Apfelstrudel<br/>
Smörbrödsomslutet bakverk med äppelfyllning<br/>
Serveras med vaniljglass<br/><br/>

Crème brûlée<br/>
Krämig vaniljdessert med ett knäckigt sockertäcke<br/><br/>

Macarons<br/>
Fyra biskviformade kakor i den franska flaggans färger<br/><br/>

Schwarzwaldkuchen<br/>
Gräddig tårtbit med körsbärsvinsstänkt botten toppad <br/>
med chokladkross
</P>
        </Wrapper>
    )
}