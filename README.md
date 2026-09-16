# Sefanha Sales Order (SO) Digital Form

**PT. Sefanha Makmur Sejahtera** - Official Sales Order Digital Form

## 📋 Overview

A modern, responsive web-based Sales Order form integrated with Google Sheets for PT. Sefanha Makmur Sejahtera. The system allows users to:

- ✅ Create and manage sales orders digitally
- ✅ Send orders via WhatsApp
- ✅ Export data to CSV (Excel compatible)
- ✅ Print/PDF generation for A4 format
- ✅ Automatic data synchronization to Google Sheets
- ✅ Real-time calculation of totals, discounts, and payments

## 🚀 Features

### Form Sections
1. **Sales Order Metadata** - Date, NO., PO Terms, Purchasing info
2. **Customer Information** - Sales representative, customer type, order channel
3. **Product Details** - Product hierarchy with categories and sub-categories
4. **Quantity & Pricing** - QTY, Unit Price, Calculations
5. **Financial Details** - Discounts, PPN (VAT), Shipping, Total Amount
6. **Payment Information** - Bank transfer details, warehouse location, delivery notes

### Calculation Features
- **Auto-calculate** Total Amount = (QTY × Unit Price) - Discount + PPN + Shipping
- **Remaining Balance** = Total - Down Payment
- Real-time updates when values change

### Export Options
- 📱 **WhatsApp Integration** - Send formatted SO via WhatsApp
- 📄 **PDF/Print** - Print to A4 format with optimized layout
- 📊 **Excel Export** - Download as CSV file
- ☁️ **Google Sheets** - Sync data to Google Sheets automatically

## 📦 Files

- **`index.html`** - Frontend form with Tailwind CSS styling
- **`Code.gs`** - Google Apps Script backend (doGet/doPost handlers)
- **`README.md`** - This file

## 🔧 Installation & Setup

### Step 1: Create Google Apps Script Project
1. Go to [script.google.com](https://script.google.com)
2. Create a new project
3. Copy content from `Code.gs` into the script editor
4. Save the project

### Step 2: Create HTML File in Apps Script
1. In Apps Script editor, go to **File → New → HTML file**
2. Name it `index`
3. Copy content from `index.html` into this file
4. Save

### Step 3: Deploy as Web App
1. Click **Deploy → New deployment**
2. Select **Type: Web app**
3. Set:
   - **Execute as:** Your account
   - **Who has access:** Anyone (or your organization)
4. Click **Deploy**
5. Copy the deployment URL - this is your form's public URL

### Step 4: Create Google Sheet
1. Create a new Google Sheet named "DataSO" in the same folder
2. The script will auto-create the header row on first data submission

## 🛠️ Bug Fixes Applied

### Fixed Issues
1. **❌ Duplicate HTML Structure** - Removed duplicate `<!DOCTYPE>` and `<html>` tags
2. **❌ WhatsApp Percent Encoding** - Fixed `%%0a` to `%0a` for proper line breaks
3. **❌ Google Sheets Integration** - Implemented actual `fetch()` POST call instead of dummy message

## 📱 Usage

1. **Fill the form** with all required information
2. **Choose action:**
   - Send to WhatsApp → Opens WhatsApp Web with formatted message
   - Print/PDF → Opens browser print dialog
   - To Excel → Downloads CSV file
   - Save Google Sheet → Sends data to Google Sheets

## ⚙️ Technical Stack

- **Frontend:** HTML5, Tailwind CSS 3, JavaScript (Vanilla)
- **Icons:** FontAwesome 6.4.0
- **Backend:** Google Apps Script
- **Database:** Google Sheets
- **Deployment:** Google Apps Script Web App

## 📊 Data Fields

The form collects the following data:

| Field | Type | Notes |
|-------|------|-------|
| Timestamp | Auto | Generated on submission |
| Tgl SO | Date | Sales order date |
| No. SO | Text | Sales order number (required) |
| No. PO / Term | Text | Purchase order reference |
| Nama Purchasing | Text | Purchasing person name |
| No. HP | Phone | Contact phone number |
| Sales | Select | Sales representative |
| Nama Costumer | Select | Customer type |
| Nama Barang | Text | Product name |
| Kategori Produk | Select | Product category |
| Sub Kategori | Select | Product sub-category |
| Qty | Number | Quantity ordered |
| Unit Price | Number | Price per unit (Rp) |
| Diskon (%) | Number | Discount percentage |
| PPN | Select | VAT/Tax percentage |
| Ongkir | Number | Shipping cost (Rp) |
| Total Harga | Calc | Total price (calculated) |
| Transfer Tujuan | Select | Bank account for payment |
| Gudang Stok | Select | Warehouse location |
| Keterangan Kirim | Text | Delivery notes |
| Catatan Pembayaran | Text | Payment notes |

## 🔐 Security Notes

- Form is deployed as public Web App (customize access in deployment settings)
- No sensitive data is stored in the code
- Google Sheets access is controlled by your account permissions
- Consider adding authentication if needed

## 💡 Customization

To customize the form:

1. **Change color scheme** - Modify Tailwind color classes in `index.html`
2. **Add/remove fields** - Edit form sections and update `Code.gs` accordingly
3. **Change sales representatives** - Update `<option>` values in the Sales select
4. **Modify categories** - Update `subKategoriData` object in JavaScript

## 🐛 Troubleshooting

### "Script error while executing doPost"
- Ensure the Google Sheet "DataSO" exists in the same folder
- Check that the script has Sheet API permissions

### "WhatsApp not opening"
- Ensure you have WhatsApp Web or WhatsApp desktop installed
- Check that required fields (No. SO, Sales, Customer) are filled

### "Data not saving to Google Sheet"
- Deploy script as Web App with "Execute as" = Your account
- Check that the sheet is accessible and not protected

## 📞 Support

For issues or questions, please contact the development team.

---

**Version:** 1.0  
**Last Updated:** September 2024  
**Developer:** Sefanha System
