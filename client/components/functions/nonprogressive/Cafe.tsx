//Home Work for Progressive


import ConversationItem from "../../items/ConversationItem";

export default function Cafe() {
  return (
    <>
      <p>
        Prepare for your next visit to a cafe. Write a short dialogue between
        you and the cashier using the menu below. The first line is given to you
        and you can use the sample convo fro reference.
      </p>

      <div className="row">
        <div className="col-sm-8">
          <img src="/images/cafe.jpg" alt="" className="img-fluid w-full" />
        </div>
        <div className="col-sm-4">
          <h5 className="fw-bold">SAMPLE CONVERSATION</h5>
          <p>
            Cashier: Hello there, may I take your order?
            <br />
            <br />
            Me: Yes. Can I have iced cafe latte?
            <br />
            <br />
            Cashier: Sure thing, what size would you like your drink to be?
            <br />
            <br />
            Me: It’s my first time trying coffee. Will ordering a large one too
            much?
            <br />
            <br />
            Cashier: Not really. But if you think you can’t handle it, go for
            the regular.
            <br />
            <br />
            Me: Okay, regular it is then.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <ConversationItem name="Cashier: " value="Hi, may I take your order?"/>
        <ConversationItem name="Me: " value=""/>
        <ConversationItem name="Cashier: " value=""/>
        <ConversationItem name="Me: " value=""/>
        <ConversationItem name="Cashier: " value=""/>
        <ConversationItem name="Me: " value=""/>
      </div>
    </>
  );
}
