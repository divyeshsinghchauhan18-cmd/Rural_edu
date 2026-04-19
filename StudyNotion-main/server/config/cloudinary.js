const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name:"dvlo38mjh",
			api_key: "253591915823749",
			api_secret:"P5bV32mJo-GO0Wc90Y4sSAYUdWU",
		});
	} catch (error) {
		console.log(error);
	}
};
