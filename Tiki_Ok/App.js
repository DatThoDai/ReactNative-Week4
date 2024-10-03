import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

const formatCurrency = (value) => {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};

const OrderScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800;
  const totalPrice = pricePerItem * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.productInfo}>
          <View style={styles.productImage}>
            <Image source={require("./images/book.png")}></Image>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.supplierText}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.currentPrice}>
              141.800 đ
            </Text>
            <Text style={styles.originalPrice}>
              {formatCurrency(pricePerItem)}
            </Text>
            <View style={styles.quantitySection}>
              <TouchableOpacity style={styles.icon} onPress={decreaseQuantity}>
                <Text style={styles.iconText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity style={styles.icon} onPress={increaseQuantity}>
                <Text style={styles.iconText}>+</Text>
              </TouchableOpacity>
              <Text style={styles.buyLater}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.discountSection}>
          <View style={styles.discountText}>
            <Text style={styles.label}>
              Mã giảm giá đã lưu
            </Text>
            <Text style={styles.viewHere}>
              Xem tại đây
            </Text>
          </View>
          <View style={styles.applyDiscount}>
            <TextInput
              style={styles.discountInput}
              editable={false}
              selectTextOnFocus={false}
              value="Mã giảm giá"
            />
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.centerSection}>
        <View style={styles.giftCard}>
          <Text style={styles.giftCardText}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <Text style={styles.enterHere}>Nhập tại đây?</Text>
        </View>

        <View style={styles.subTotal}>
          <Text style={styles.subTotalText}>
            Tạm tính
          </Text>
          <Text style={styles.subTotalAmount}>
            {formatCurrency(totalPrice)}
          </Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.total}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalAmount}>{formatCurrency(totalPrice)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Tiến hành đặt hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4c4c4",
  },
  topSection: {
    flex: 2,
    backgroundColor:"#fff"
  },
  productInfo: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
  },
  productImage: {
    flex: 1,
    marginLeft: 20,
  },
  productDetails: {
    flex: 2,
  },

  productName: {
    fontWeight: "bold",
    fontSize: 14,
  },

  supplierText: {
    fontSize: 14,
    marginTop: 7,
  },

  originalPrice: {
    textDecorationLine: "line-through",
    margintop: 2,
    color: "#c4c4c4"
  },

  currentPrice: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
    marginVertical: 7,
  },

  quantitySection: {
    flexDirection: "row",
    marginTop: 5,
  },
  icon: {
    backgroundColor: "#c4c4c4",
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    color: "#000",
    fontSize: 13,
  },
  quantity: {
    paddingHorizontal: 15,
  },

  buyLater: {
    marginLeft: 90,
    color: "blue",
    fontWeight: "bold",
  },
  discountSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  discountText: {
    flexDirection: "row",
    marginTop: 10,
  },
  label: {
    marginRight: 15,
  },
  viewHere: {
    color: "#134FEC"
  },

  applyDiscount: {
    flexDirection: "row",
    marginTop: 10,
  },

  discountInput: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    color: "black",
    fontWeight:"bold",
  },

  applyButton: {
    flex: 1,
    backgroundColor: "#0A5EB7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 20,
  },
  applyButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
  },


  centerSection: {
    flex: 1,
  },

  giftCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    height: 45,
    paddingHorizontal: 20,
    marginTop: 15,
    alignItems:"center",
  },

  enterHere: {
    color: "#0A5EB7",
    fontWeight: "bold",
  },

  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    marginTop:10,
  },
  subTotalText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  subTotalAmount: {
    marginRight: 30,
    color: "red",
    fontSize: 19,
    fontWeight: "bold",
  },

  bottomSection: {
    flex: 0.7,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 50,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    color: "#c4c4c4",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalAmount: {
    color: "#EE0D0D",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 20,
  },
  checkoutButton: {
    backgroundColor: "#E53935",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 19,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
