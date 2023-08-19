import MainContainer from "../components/Containers/MainContainer"

import { Title } from "../components/Titles/Titles";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        <h1>ABOUT US</h1>
      </div>

      {/* ABOUT US */}
      <div className={styles.us}>
        <h2>What is BudgetIn?</h2>
        <div>BudgetIn is a money management web application that uses the 50/30/20 budget rule.</div>
      </div>

      {/* ABOUT RULE */}
      <div className={styles.rule}>
        <h2>What is 50/30/20 Rule?</h2>
        <div>It is an easy budgeting method that can help you manage you money effectively. The basic rule is to divide your monthly income into three spending categories: 50% for needs, 30% for wants, and 20% for savings or emergency expenses. The 50-30-20 rule isn’t meant to be a budgetary precision law, but rather a general guideline to help get you thinking about how to allocate those paychecks. Example of how to divide using the rule :</div>
        <div>Needs: cleaning utilities, daily food and drink, groceries, education utilities, etc.</div>
        <div>Wants: traveling, dining out, entertainment, streaming services, etc.</div>
        <div>The 20% of your net income goes to your savings and investments. This includes adding money to an emergency fund in a bank savings account, making IRA contributions to a mutual fund account, and investing in the stock market. You should have at least three months of emergency savings on hand in case you lose your job or an unforeseen event occurs.</div>
      </div>
    </MainContainer>
  );
};

export default About;