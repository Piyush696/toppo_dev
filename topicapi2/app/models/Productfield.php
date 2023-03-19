<?php

class Productfield extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $productfield_id;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $description;

    /**
     *
     * @var string
     */
    public $datatype_id;

    /**
     *
     * @var string
     */
    public $primary_productfieldcategory_id;

    /**
     *
     * @var string
     */
    public $secondary_productfieldcategory_id;

    /**
     *
     * @var string
     */
    public $tertiary_productfieldcategory_id;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("productfield");
        $this->hasMany('productfield_id', 'Product', 'productfield_id', ['alias' => 'Product']);
        $this->hasMany('productfield_id', 'ProductfieldEnum', 'productfield_id', ['alias' => 'ProductfieldEnum']);
        $this->hasMany('productfield_id', 'Productprofile', 'productfield_id', ['alias' => 'Productprofile']);
        $this->belongsTo('datatype_id', 'Datatype', 'datatype_id', ['alias' => 'Datatype']);
        $this->belongsTo('primary_productfieldcategory_id', 'Productfield-category', 'productfield-category_id', ['alias' => 'ProductfieldCategory']);
        $this->belongsTo('secondary_productfieldcategory_id', 'Productfield-category', 'productfield-category_id', ['alias' => 'ProductfieldCategory']);
        $this->belongsTo('tertiary_productfieldcategory_id', 'Productfield-category', 'productfield-category_id', ['alias' => 'ProductfieldCategory']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'productfield';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Productfield[]|Productfield|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Productfield|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
