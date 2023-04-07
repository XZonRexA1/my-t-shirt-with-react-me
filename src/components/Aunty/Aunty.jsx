import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({ ring }) => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <p>
        <small>grandpa money: {money}</small>
      </p>
      <section className="flex">
        <Cousin>Ron</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Rona
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
