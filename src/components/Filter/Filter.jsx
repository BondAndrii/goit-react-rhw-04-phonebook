import React from "react";

import PropTypes from "prop-types";

import styles from "./Filter.module.css"

export const Filter = ({value, onChange, onDelete}) => (
    <label className={styles.LabelFilter}>
        <p className={styles.Text}>Пошук за ім'ям:</p> 
        <input
            type="text" value={value}
            className={styles.FilterInput }
            placeholder="введи ім'я"
            onChange={onChange}
        />
        <button className={styles.ButtonFilter} type="button" onClick={onDelete}>Зітрись!</button>
    </label>
        )


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}