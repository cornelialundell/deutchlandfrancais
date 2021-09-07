import styled from "styled-components";
import { Heading } from "../globalStyles/Heading";
import { P } from "../globalStyles/P-style";
import { ComputerFlex } from "../globalStyles/ComputerFlex";
import { Wrapper } from "../globalStyles/Wrapper";

export const FoodMenu = () => {
  return (
    <Wrapper>
      <Heading>Meny</Heading>
      <ComputerFlex>
          <div>
      <Heading size="2em" clr="#8979B9" txtShadow="none" padding="1rem 0">
        Förrätter
      </Heading>
      <P>
        <b>Escargots</b>
        <br />
        Smörstekta sniglar med ett knäckigt osttäcke
        <br />
        <br />
        <b>Pfeifferbeiser</b>
        <br />
        Lufttorkad ölkorv smaksatt med vitlök, paprika och peppar
        <br />
        <br />
        <b>Trois petits fromages</b>
        <br />
        Tre små ostar utvalda av kocken (le coq)
      </P>
      </div>
      <div>
      <Heading size="2em" clr="#8979B9" txtShadow="none" padding="1rem 0">
        Varmrätter
      </Heading>
      <P>
        <b>Bouillabaisse</b>
        <br />
        Fisk och skaldjursgryta, serveras med aioli och bröd
        <br />
        <br />
        <b>Boeuf Bourguignon</b>
        <br />
        Mustig, vinkokt köttgryta
        <br />
        <br />
        <b>Schnitzel mit kartoffeln</b>
        <br />
        Panerat och friterat kalvkött med ugnsrostad potatis
        <br />
        <br />
        <b>Currywurst</b>
        <br />
        Skivad bratwurst toppad med kryddig tomatsås, curry-
        <br />
        och paprikapulver. Serveras med pommes
      </P>
      </div>
      <div>
      <Heading size="2em" clr="#8979B9" txtShadow="none" padding="1rem 0">
        Efterrätter
      </Heading>
      <P>
        <b>Apfelstrudel</b>
        <br />
        Smörbrödsomslutet bakverk med äppelfyllning
        <br />
        Serveras med vaniljglass
        <br />
        <br />
        <b>Crème brûlée</b>
        <br />
        Krämig vaniljdessert med ett knäckigt sockertäcke
        <br />
        <br />
        <b>Macarons</b>
        <br />
        Fyra biskviformade kakor i den franska flaggans färger
        <br />
        <br />
        <b>Schwarzwaldkuchen</b>
        <br />
        Gräddig tårtbit med körsbärsvinsstänkt botten toppad <br />
        med chokladkross
      </P>
      </div>
      </ComputerFlex>
    </Wrapper>
  );
};
