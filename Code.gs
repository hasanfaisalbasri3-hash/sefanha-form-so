function doGet(e) {
  // Serves the HTML file when deployed as a Web App
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('FORM SO PT. SEFANHA MAKMUR SEJAHTERA')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("DataSO");
    
    // Fallback if DataSO sheet doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet("DataSO");
      // Add header row automatically if newly created
      sheet.appendRow([
        "Timestamp", "Tgl SO", "No. SO", "No. PO / Term", "Nama Purchasing", "No. HP", 
        "Sales", "Nama Costumer", "Order By", "Nama Toko", "Nama Barang", "Kategori Produk", 
        "Sub Kategori", "Qty", "Satuan", "Unit Price", "Jumlah", "DP", "Sisa Pelunasan", 
        "PPN", "Diskon (%)", "Jml Stlh Diskon", "Ongkir", "Total Harga", "Transfer Tujuan", 
        "Gudang Stok", "Keterangan Kirim", "Catatan Pembayaran"
      ]);
    }

    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.tglSo || "",
      data.noSo || "",
      data.noPo || "",
      data.namaPurchasing || "",
      data.noHp || "",
      data.sales || "",
      data.namaCostumer || "",
      data.orderBy || "",
      data.namaToko || "",
      data.namaBarang || "",
      data.kategoriProduk || "",
      data.subKategori || "",
      data.qty || 0,
      data.satuan || "",
      data.unitPrice || 0,
      data.jumlah || "",
      data.pembayaranDp || 0,
      data.sisaPelunasan || "",
      data.ppn || "",
      data.diskon || 0,
      data.jmlSetelahDiskon || "",
      data.ongkir || 0,
      data.totalHarga || "",
      data.transfer || "",
      data.stok || "",
      data.keteranganKirim || "",
      data.pembayaranCatatan || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success", "message": "Data saved successfully to Google Sheet!"}))
        .setMimeType(ContentService.MimeType.JSON);
        
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({"status": "error", "message": error.toString()}))
        .setMimeType(ContentService.MimeType.JSON);
  }
}