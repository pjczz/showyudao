/** 跟进状态 */
export const FOLLOWUP_STATUS = [
  { label: '已跟进', value: true },
  { label: '待跟进', value: false }
]

/** 归属范围 */
export const SCENE_TYPES = [
  { label: '我负责的', value: 1 },
  { label: '我参与的', value: 2 },
  { label: '下属负责的', value: 3 }
]

/** 联系状态 */
export const CONTACT_STATUS = [
  { label: '今日需联系', value: 1 },
  { label: '已逾期', value: 2 },
  { label: '已联系', value: 3 }
]

/** 合同审批状态 */
export const CONTRACT_AUDIT_STATUS = [
  { label: '已审批', value: 20 },
  { label: '待审批', value: 10 }
]
