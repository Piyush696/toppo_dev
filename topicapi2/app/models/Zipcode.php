<?php

class Zipcode extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $zipcode_id;

    /**
     *
     * @var string
     */
    public $state_id;

    /**
     *
     * @var integer
     */
    public $areacode;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("topicopo_example");
        $this->setSource("zipcode");
        $this->hasMany('zipcode_id', 'Company', 'zip_id', ['alias' => 'Company']);
        $this->hasMany('zipcode_id', 'User', 'zip_id', ['alias' => 'User']);
        $this->belongsTo('state_id', 'State', 'state_id', ['alias' => 'State']);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'zipcode';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Zipcode[]|Zipcode|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Zipcode|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
