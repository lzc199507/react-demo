/* global document */
import { useRef, useEffect } from 'react'
import { isString } from 'lodash/lang'
import { get } from 'lodash/object'
import { escapeRegExp } from 'lodash/string'

/**
 * @description: 动态表单提交函数
 * @param {String} [url=''] 表单的提交的url
 * @param {Object[]} [params=[]] 表单提交的字段列表
 * @param {String} params[].name 所提交字段的字段名称
 * @param {String} params[].value 所提交字段的字段值
 * @return {Promise}
 */
export function exportUtil ({ url = '', params = [], method = 'get' }) {
  return new Promise((resolve) => {
    const form = document.createElement('form')
    form.setAttribute('style', 'display:none')
    form.setAttribute('method', method)
    form.setAttribute('enctype', 'multipart/form-data')
    form.setAttribute('action', url)
    params.reduce((f, item) => {
      const { name, value } = item
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', name)
      input.setAttribute('value', value)
      f.appendChild(input)
      return f
    }, form)
    document.body.appendChild(form)
    form.submit()
    form.remove()
    resolve()
  })
}

/**
 * @description: 清除对象中每个String类型value值的前后空格
 * @param {Object} obj
 * @return {Object}
 */
export function trimObjectValues (obj) {
  return Object.entries(obj)
    .map(([key, value]) => {
      const fixedValue = isString(value) ? value.trim() : value
      return [key, fixedValue]
    })
    .reduce((newObj, [key, value]) => {
      newObj[key] = value
      return newObj
    }, {})
}

/**
 * @description: 根据keywordString，切割出关键词，并且根据关键词，返回筛选出的符合关键词要求的元素的数组
 * @param {String} keywordString 关键词字符串，关键词之间以空格作为分隔符
 * @param {Array} filteringArr 需要查询过滤的数组
 * @param {String|String[]} [path] 关键词所要匹配的字段，支持'[1].a.b'的写法
 * @return {Array}
 */
export function filterWithKeyword (keywordString, filteringArr, path) {
  if (!Array.isArray(filteringArr)) { return [] }
  if (!(isString(keywordString) && keywordString)) { return [] }
  const keywordArr = keywordString.split(' ').filter(item => !!item)
  return keywordArr.reduce((arr, keyword) => {
    const regExp = new RegExp(escapeRegExp(keyword), 'i')
    return arr.filter(item => regExp.test(get(item, path, item)))
  }, filteringArr)
}

/**
 * @description: hook，记录当前状态值，返回前一个状态值
 * @param {*} value 当前状态值
 * @return: 前一个状态值
 */
export function usePrevious (value) {
  const ref = useRef()
  useEffect(() => { ref.current = value })
  return ref.current
}
