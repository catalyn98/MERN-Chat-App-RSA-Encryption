import mongoose from "mongoose";
import NodeRSA from "node-rsa";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    publicKey: {
      type: String,
      required: true,
    },
    privateKey: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Funcție pentru generarea unei noi perechi de chei RSA
messageSchema.statics.generateRSAKeys = function () {
  // Lungimea cheii RSA este 2048 de biți
  const key = new NodeRSA({ b: 2048 });
  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");
  return { publicKey, privateKey };
};

// Metodele de criptare și decriptare
messageSchema.methods.encryptMessage = function () {
  if (this.message) {
    const key = new NodeRSA(this.publicKey);
    const encrypted = key.encrypt(this.message, "base64");
    this.message = encrypted;
    console.log(
      "_________________________________________________________________________"
    );
    console.log(this.publicKey);
    console.log(this.privateKey);
    console.log("Mesajul criptat este -> ", this.message);
  }
};

messageSchema.methods.decryptMessage = function () {
  if (this.message) {
    const key = new NodeRSA(this.privateKey);
    const decrypted = key.decrypt(this.message, "utf8");
    this.message = decrypted;
  }
};

const Message = mongoose.model("Message", messageSchema);

export default Message;
