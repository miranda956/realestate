<template>
<div class="container">
	<div class="row">
        <h2>Ecommerce Products Display Layout</h2>
        <p>
            This snippent uses <a href="http://daneden.github.io/animate.css/" target="_blank">Animate.css</a> for the animation of the buttons.
        </p>
        <div class="col-sm-3">
            <article class="col-item">
            	<div class="photo">
        			<div class="options-cart-round">
        				<button class="btn btn-default" title="Add to cart">
        					<span class="fa fa-shopping-cart"></span>
        				</button>
        			</div>
        			<a href="#"> <img src="https://unsplash.it/500/300?image=0" class="img-responsive" alt="Product Image" /> </a>
        		</div>
        		<div class="info">
        			<div class="row">
        				<div class="price-details col-md-6">
        					<p class="details">
        						Lorem ipsum dolor sit amet, consectetur..
        					</p>
        					<h1>Sample Product</h1>
        					<span class="price-new">$110.00</span>
        				</div>
        			</div>
        		</div>
        	</article>
            <p class="text-center">Hover over image</p>
        </div>
        <div class="col-sm-3">
            <article class="col-item">
        		<div class="photo">
        			<div class="options">
        				<button class="btn btn-default" type="submit" data-toggle="tooltip" data-placement="top" title="Add to wish list">
        					<i class="fa fa-heart"></i>
        				</button>
        				<button class="btn btn-default" type="submit" data-toggle="tooltip" data-placement="top" title="Compare">
        					<i class="fa fa-exchange"></i>
        				</button>
        			</div>
        			<div class="options-cart">
        				<button class="btn btn-default" title="Add to cart">
        					<span class="fa fa-shopping-cart"></span>
        				</button>
        			</div>
        			<a href="#"> <img src="https://unsplash.it/500/300?image=0" class="img-responsive" alt="Product Image" /> </a>
        		</div>
        		<div class="info">
        			<div class="row">
        				<div class="price-details col-md-6">
        					<p class="details">
        						Lorem ipsum dolor sit amet, consectetur..
        					</p>
        					<h1>Sample Product</h1>
        					<span class="price-new">$110.00</span>
        				</div>
        			</div>
        		</div>
        	</article>
            <p class="text-center">Hover over image</p>
        </div>
        <div class="col-sm-3">
        	<article class="col-item">
        		<div class="options">
        			<button class="btn btn-default" type="submit" data-toggle="tooltip" data-placement="top" title="Add to wish list">
        				<i class="fa fa-heart"></i>
        			</button>
        			<button class="btn btn-default" type="submit" data-toggle="tooltip" data-placement="top" title="Compare">
        				<i class="fa fa-exchange"></i>
        			</button>
        		</div>
        		<div class="photo">
        			<a href="#"> <img src="https://unsplash.it/500/300?image=0" class="img-responsive" alt="Product Image" /> </a>
        		</div>
        		<div class="info">
        			<div class="row">
        				<div class="price-details col-md-6">
        					<p class="details">
        						Lorem ipsum dolor sit amet, consectetur..
        					</p>
        					<h1>Sample Product</h1>
        					<span class="price-new">$110.00</span>
        				</div>
        			</div>
        		</div>
        	</article>
        </div>
        <div class="col-sm-3">
        	<article class="col-item">
        		<div class="photo">
        			<a href="#"> <img src="https://unsplash.it/500/300?image=0" class="img-responsive" alt="Product Image" /> </a>
        		</div>
        		<div class="info">
        			<div class="row">
        				<div class="price-details col-md-6">
        					<p class="details">
        						Lorem ipsum dolor sit amet, consectetur..
        					</p>
        					<h1>Sample Product</h1>
        					<span class="price-new">$110.00</span>
        				</div>
        			</div>
        			<div class="separator clear-left">
        				<p class="btn-add">
        					<i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a>
        				</p>
        				<p class="btn-details">
        					<a href="#" class="hidden-sm" data-toggle="tooltip" data-placement="top" title="Add to wish list"><i class="fa fa-heart"></i></a>
        					<a href="#" class="hidden-sm" data-toggle="tooltip" data-placement="top" title="Compare"><i class="fa fa-exchange"></i></a>
        				</p>
        			</div>
        			<div class="clearfix"></div>
        		</div>
        	</article>
        </div>
	</div>
</div>
    
</template>

<script>
export default {
    
}
</script>


<style scoped>

.col-item {
  border: 1px solid #E1E1E1;
  background: #FFF;
  margin-bottom:12px;
}
.col-item .options {
  position:absolute;
  top:6px;
  right:22px;
}
.col-item .photo {
  overflow: hidden;
}
.col-item .photo .options {
  display:none;
}
.col-item .photo img {
  margin: 0 auto;
  width: 100%;
}

.col-item .options-cart {
  position:absolute;
  left:22px;
  top:6px;
  display:none;
}
.col-item .photo:hover .options,
.col-item .photo:hover .options-cart {
  display:block;
  -webkit-animation: fadeIn .5s ease;
  -moz-animation: fadeIn .5s ease;
  -ms-animation: fadeIn .5s ease;
  -o-animation: fadeIn .5s ease;
  animation: fadeIn .5s ease;
}
.col-item .options-cart-round {
  position:absolute;
  left:42%;
  top:22%;
  display:none;
}
.col-item .options-cart-round button {
  border-radius: 50%;
  padding:14px 16px;
  
}
.col-item .options-cart-round button .fa {
  font-size:22px;
}
.col-item .photo:hover .options-cart-round {
  display:block;
  -webkit-animation: fadeInDown .5s ease;
  -moz-animation: fadeInDown .5s ease;
  -ms-animation: fadeInDown .5s ease;
  -o-animation: fadeInDown .5s ease;
  animation: fadeInDown .5s ease;
}
.col-item .info {
  padding: 10px;
  margin-top: 1px;
}
.col-item .price-details {
  width: 100%;
  margin-top: 5px;
}
.col-item .price-details h1 {
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  float:left;
}
.col-item .price-details .details {
  margin-bottom: 0px;
  font-size:12px;
}
.col-item .price-details span {
  float:right;
}
.col-item .price-details .price-new {
  font-size:16px;
}
.col-item .price-details .price-old {
  font-size:18px;
  text-decoration:line-through;
}
.col-item .separator {
  border-top: 1px solid #E1E1E1;
}

.col-item .clear-left {
  clear: left;
}
.col-item .separator a {
  text-decoration:none;
}
.col-item .separator p {
  margin-bottom: 0;
  margin-top: 6px;
  text-align: center;
}

.col-item .separator p i {
  margin-right: 5px;
}
.col-item .btn-add {
  width: 60%;
  float: left;
}
.col-item .btn-add a {
  display:inline-block !important;
}
.col-item .btn-add {
  border-right: 1px solid #E1E1E1;
}
.col-item .btn-details {
  width: 40%;
  float: left;
  padding-left: 10px;
}
.col-item .btn-details a {
  display:inline-block !important;
}
.col-item .btn-details a:first-child {
  margin-right:12px;
}

</style>