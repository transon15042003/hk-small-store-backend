import { z } from 'zod';

export const updateSettingsSchema = z.object({
  // snake_case (OpenAPI SSOT)
  deposit_amount: z.number().int().min(0).max(1000000).optional(),
  return_fee: z.number().int().min(0).max(1000000).optional(),
  return_window_days: z.number().int().min(1).max(30).optional(),
  order_hold_minutes: z.number().int().min(5).max(1440).optional(),
  shop_phone: z.string().optional(),
  shop_zalo: z.string().optional(),
  shop_messenger_url: z.string().nullable().optional(),
  bank_name: z.string().optional(),
  bank_account_number: z.string().optional(),
  bank_account_holder: z.string().optional(),
  bank_qr_image_url: z.string().nullable().optional(),
  shipping_fee_presets: z.array(z.number().int().min(0)).min(1).max(10).optional(),
  default_shipping_fee: z.number().int().min(0).max(1000000).optional(),
  freeship_min_items: z.number().int().min(0).max(50).optional(),

  // camelCase (backward compatibility)
  depositAmount: z.number().int().min(0).max(1000000).optional(),
  returnFee: z.number().int().min(0).max(1000000).optional(),
  returnWindowDays: z.number().int().min(1).max(30).optional(),
  orderHoldMinutes: z.number().int().min(5).max(1440).optional(),
  shopPhone: z.string().optional(),
  shopZalo: z.string().optional(),
  shopMessengerUrl: z.string().nullable().optional(),
  bankName: z.string().optional(),
  bankAccountNumber: z.string().optional(),
  bankAccountHolder: z.string().optional(),
  bankQrImageUrl: z.string().nullable().optional(),
  shippingFeePresets: z.array(z.number().int().min(0)).min(1).max(10).optional(),
  defaultShippingFee: z.number().int().min(0).max(1000000).optional(),
  freeshipMinItems: z.number().int().min(0).max(50).optional(),
});
