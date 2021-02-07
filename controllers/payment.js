const publishable_key="";
const secret_key="sk_test_arK1DHLVhNoPOIUrgjKnB3d900uItUMKO4";

const stripe=require("stripe")(secret_key);
// todo payment feature
const router=express.Router(); 

app.post("api/charge", (req, res) => {
    try {
      stripe.customers
        .create({
          name: req.body.name,
          email: req.body.email,
          source: req.body.stripeToken
        })
        .then(customer =>
          stripe.charges.create({
            amount: req.body.amount * 100,
            currency: "usd",
            customer: customer.id
          })
        )
        .then(() => res.render("you have successfully rented "))
        .catch(err => console.log(err));
    } catch (err) {
      res.send(err);
    }
  });

  router.post("api/charges",(req,res,next)=>{
    stripe.customers.create({
      name:req.body.name,
      email:req.body.email,
      source:req.body.stripeToken
    }).then((customer)=>{
      stripe.charges.create({
      amount:req.body.amount * 100,
      currency:"usd",
      customer:customer.id  
      }).then((completed)=>{
        res.render("you have successfully rented ")
      }).catch((err)=>{
        next(err)
      })
    }).catch((err)=>{
      next(err);
      console.log(err);

    })
  })
  
