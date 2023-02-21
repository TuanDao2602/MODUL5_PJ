import React from 'react'

export default function Cart() {
  return (
    <div>
        <tr>
                    <td className="cart_product_img">
                      <a href="#">
                        <img src="https://vietblend.vn/wp-content/uploads/2021/04/10-tac-dung-cua-tra-hoa-nhai-luu-y-khi-dung-va-cach-pha-tra-dung-chuan-0-1200x676.jpg" alt="Product" />
                      </a>
                    </td>
                    <td className="cart_product_desc">
                      <h5>Trà Hoa Nhài</h5>
                    </td>
                    <td className="price">
                    <select>
                      <option value="">M</option>
                      <option value="">L</option>
                    </select>

                    </td>
                    <td className="price">
                      <span>50$</span>
                    </td>
                    <td className="qty">
                      <div className="qty-btn quanti">
                        <p>Qty</p>
                        <div className="quantity">
                          <input
                            type="number"
                            className="qty-text"
                            id="qty"
                            step={1}
                            min={1}
                            max={10}
                            name="quantity"
                            defaultValue={1}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
        </div>
  )
}
