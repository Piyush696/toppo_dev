<?php

class Productfeature extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $productfeature_id;

    /**
     *
     * @var string
     */
    public $feature;

    /**
     *
     * @var string
     */
    public $datetimecreated;

    /**
     *
     * @var string
     */
    public $datetimemodified;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("productfeature");
        $this->hasMany('productfeature_id', 'ProductProductfeature', 'productfeature_id', ['alias' => 'ProductProductfeature']);
        $this->hasMany('productfeature_id', 'ProductfeatureTag', 'productfeature_id', ['alias' => 'ProductfeatureTag']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'productfeature';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Productfeature[]|Productfeature|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Productfeature|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
