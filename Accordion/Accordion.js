export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const value = [
    {
      title: "Is skincare products good for your skin?",
      answer:
        "Good skin care is essential at any age and healthy habits in your 20s and 30s can strengthen and prepare your skin for the effects of aging down the road. Skin has strong collagen and elastic production in your 20s and 30s.",
    },
    {
      title: "Is Derma co a Indian brand?",
      answer:
        "Founded in 2020 by husband-wife duo Varun Alagh and Ghazal Alagh, The Derma Co. intends to redefine the Indian skincare market with professional solutions that help millennials embrace their original skin and hair.",
    },
    {
      title: "What is the healthiest sunscreen to use?",
      answer:
        "Based on the best current science and toxicology data, we continue to recommend sunscreens with the mineral active ingredients zinc oxide and titanium dioxide, because they are the only two ingredients the FDA recognized as safe or effective in their proposed draft rules,” Burns says.",
    },
  ];

  const [selected, setSelected] = useState(null);

  function handleToggler(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }
  return (
    <div>
      <span>
        {value.map(function (item, i) {
          return (
            <>
              <div>
                <p
                  onClick={() => handleToggler(i)}
                  className="container"
                  key={i}
                >
                  {item.title}
                  <span>{selected === i ? "-" : "+"}</span>
                </p>
              </div>
              <div>
                <p className={selected === i ? "answer" : "hidden"} key={i}>
                  {item.answer}
                </p>
              </div>
            </>
          );
        })}
      </span>
    </div>
  );
}
