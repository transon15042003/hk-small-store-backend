export function toShopSettings(s: any) {
  return {
    deposit_amount: s.depositAmount,
    return_fee: s.returnFee,
    return_window_days: s.returnWindowDays,
    order_hold_minutes: s.orderHoldMinutes,
    policy_version: s.policyVersion,
    shop_phone: s.shopPhone,
    shop_zalo: s.shopZalo,
    shop_messenger_url: s.shopMessengerUrl ?? null,
    bank_name: s.bankName,
    bank_account_number: s.bankAccountNumber,
    bank_account_holder: s.bankAccountHolder,
    bank_qr_image_url: s.bankQrImageUrl ?? null,
    shipping_fee_presets: Array.isArray(s.shippingFeePresets) ? s.shippingFeePresets : [20000, 30000],
    default_shipping_fee: s.defaultShippingFee,
    freeship_min_items: s.freeshipMinItems,
    updated_at: s.updatedAt ? (s.updatedAt instanceof Date ? s.updatedAt.toISOString() : String(s.updatedAt)) : null,
  };
}

export function toDbSettingsUpdate(data: any): Record<string, any> {
  const dbData: Record<string, any> = {};

  if (data.deposit_amount !== undefined) dbData.depositAmount = data.deposit_amount;
  else if (data.depositAmount !== undefined) dbData.depositAmount = data.depositAmount;

  if (data.return_fee !== undefined) dbData.returnFee = data.return_fee;
  else if (data.returnFee !== undefined) dbData.returnFee = data.returnFee;

  if (data.return_window_days !== undefined) dbData.returnWindowDays = data.return_window_days;
  else if (data.returnWindowDays !== undefined) dbData.returnWindowDays = data.returnWindowDays;

  if (data.order_hold_minutes !== undefined) dbData.orderHoldMinutes = data.order_hold_minutes;
  else if (data.orderHoldMinutes !== undefined) dbData.orderHoldMinutes = data.orderHoldMinutes;

  if (data.shop_phone !== undefined) dbData.shopPhone = data.shop_phone;
  else if (data.shopPhone !== undefined) dbData.shopPhone = data.shopPhone;

  if (data.shop_zalo !== undefined) dbData.shopZalo = data.shop_zalo;
  else if (data.shopZalo !== undefined) dbData.shopZalo = data.shopZalo;

  if (data.shop_messenger_url !== undefined) dbData.shopMessengerUrl = data.shop_messenger_url;
  else if (data.shopMessengerUrl !== undefined) dbData.shopMessengerUrl = data.shopMessengerUrl;

  if (data.bank_name !== undefined) dbData.bankName = data.bank_name;
  else if (data.bankName !== undefined) dbData.bankName = data.bankName;

  if (data.bank_account_number !== undefined) dbData.bankAccountNumber = data.bank_account_number;
  else if (data.bankAccountNumber !== undefined) dbData.bankAccountNumber = data.bankAccountNumber;

  if (data.bank_account_holder !== undefined) dbData.bankAccountHolder = data.bank_account_holder;
  else if (data.bankAccountHolder !== undefined) dbData.bankAccountHolder = data.bankAccountHolder;

  if (data.bank_qr_image_url !== undefined) dbData.bankQrImageUrl = data.bank_qr_image_url;
  else if (data.bankQrImageUrl !== undefined) dbData.bankQrImageUrl = data.bankQrImageUrl;

  if (data.shipping_fee_presets !== undefined) dbData.shippingFeePresets = data.shipping_fee_presets;
  else if (data.shippingFeePresets !== undefined) dbData.shippingFeePresets = data.shippingFeePresets;

  if (data.default_shipping_fee !== undefined) dbData.defaultShippingFee = data.default_shipping_fee;
  else if (data.defaultShippingFee !== undefined) dbData.defaultShippingFee = data.defaultShippingFee;

  if (data.freeship_min_items !== undefined) dbData.freeshipMinItems = data.freeship_min_items;
  else if (data.freeshipMinItems !== undefined) dbData.freeshipMinItems = data.freeshipMinItems;

  return dbData;
}
