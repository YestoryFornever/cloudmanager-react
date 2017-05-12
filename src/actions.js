/*
 * action 类型
 */
export const AUTHENTICATED = 'AUTHENTICATED';

/*
 * action 创建函数
 */
export function setAuthenticate(auth){
	return { type:AUTHENTICATED, auth}
}